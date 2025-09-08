# EquicordCompanion

Equicord Companion is a vscode extension to test Equicord patches & webpack finds right from the comfort of your IDE

- Adds "Test Find" on any webpack finds that will test whether your filter finds exactly one module (and not more or none)

- Adds "Test Patch" on any patches you define in definePlugin() that will test that your find is unique and your match and replace works and compiles correctly

- Adds "View Module" on any patches you define in definePlugin() that will show you the module you are trying to patch

- Adds "Diff Module" on any patches you define in definePlugin() that will show you the module unpatched & patched

To use it you also need to be using Equicord and enable the  "DevCompanion" plugin. Then just start Discord

For custom building the companion you need the vsix. We recommend the marketplace link below.

[Download on the vscode marketplace](https://marketplace.visualstudio.com/items?itemName=thororen.equicord-companion)

# Dev Companion

## Features

- Testing Patches
- Diffing Patches
- Extracting Webpack Modules
  - From Patches
  - From Finds
- Disable/Enable Plugin buttons above the definePlugin export
- Automatically run the reporter and have a gui with with the results
- Webpack LSP that lets you jump around extracted webpack files
- See where exports from a webpack module are used
- Cache discords modules locally

## Images/Videos of the Features

### Webpack LSP

<https://github.com/user-attachments/assets/7d4ab157-0751-4a59-8e0e-1a3607a3247d>

### Reporter Gui

<https://github.com/user-attachments/assets/71c45fda-5161-43b0-8b2d-6e5fae8267d2>

### Testing Patches

<https://github.com/user-attachments/assets/99a9157e-89bb-45c7-b780-ffac30cdf4d0>

### Diffing Patches

#### Only works for patches that are currently applied and have not errored

#### Shows every patch to that webpack module, not just yours

<https://github.com/user-attachments/assets/958f4b61-4390-47fa-9dd3-6fc888dc844d>

### Extracting Webpack Modules

#### Use the toggle in the plugin setting to default to the extracted module or the unpatched module if the module is patched

<https://github.com/user-attachments/assets/bbe308c8-af9a-4141-b387-9dcf175cfd25>

### Disable/Enable Plugins

#### There is a plugin setting to set auto-reload after a plugin is toggled

<https://github.com/user-attachments/assets/56de9c1d-fb6d-4665-aff0-6429f80d1f15>

### Module Cache

#### To enable the side bar, use the settings in vscode

<https://github.com/user-attachments/assets/950230e6-64e5-4bbf-86bf-384ac0b3857d>

### Jumping to References

<https://github.com/user-attachments/assets/e82291c4-bad3-479c-bfd0-8810d07faab9>
