import { isNotNull, tryParseFunction, tryParseRegularExpressionLiteral, tryParseStringLiteral } from "@ast/util";
import { AnyFindType, Discriminate, OutgoingMessage } from "@type/server";

import { createSourceFile, isCallExpression, Node, ScriptTarget } from "typescript";
import { CodeLens, CodeLensProvider, Range } from "vscode";

const vencordWebpackImportRegex = /import \{(.+?)\} from ['`"]@webpack(\/.+?)?['`"]/;

export const WebpackCodeLensProvider: CodeLensProvider = {
    provideCodeLenses(document) {
        const text = document.getText();

        const match = vencordWebpackImportRegex.exec(text);
        if (!match) return [];

        const finds = match[1].split(",")
            .map(s => s.trim())
            .filter(s => s.startsWith("find"));

        if (!finds.length) return [];

        const sourceFile = createSourceFile(document.fileName, text, ScriptTarget.Latest, true);
        const lenses = [] as CodeLens[];

        function walk(node: Node) {
            let type: string;
            if (isCallExpression(node) && finds.includes(type = node.expression.getText())) {
                const args = node.arguments.map(a => tryParseStringLiteral(a) ?? tryParseRegularExpressionLiteral(a) ?? tryParseFunction(document, a));

                const range = new Range(document.positionAt(node.getStart()), document.positionAt(node.getEnd()));

                lenses.push(new CodeLens(range, {
                    title: "View Module",
                    command: "equicord-companion.extractFind",
                    arguments: [{
                        type: "extract",
                        data: {
                            extractType: "find",
                            findType: type as AnyFindType,
                            findArgs: args.filter(isNotNull),
                        }
                    } satisfies Discriminate<OutgoingMessage, "extract">],
                    tooltip: "View Module"
                }));
                lenses.push(new CodeLens(range, {
                    title: "Test Find",
                    command: "equicord-companion.testFind",
                    arguments: [{ type, args: args.filter(isNotNull) }]
                }));
            }

            node.forEachChild(walk);
        }

        walk(sourceFile);

        return lenses;
    },
};
