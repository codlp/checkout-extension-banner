# Shopify checkout UI extension - Banner

This Shopify application is a checkout UI extension, meaning an app you can display on your store's checkout.

## Features

This banner is located on the Checkout page. It contains several elements that the merchant can customize without coding, directly through the Checkout Editor:

- Title
- Description
- Status: info, success, warning, or critical
- Collapsible

This banner supports localization (English and French).

If the merchant chooses to have a localized banner content, then the banner's title and description will not be added through the Checkout Editor. They will be added through a JSON metafield on the Shop model, containing all the translations. See comments in the code for more information.

## Running this application

To run this application locally:

1. Clone the repository.
1. Follow Shopify's [Work on an existing app tutorial](https://shopify.dev/docs/apps/tools/cli/existing) to install the project dependencies and preview the app.

## Developer resources

- [Checkout UI extensions](https://shopify.dev/docs/api/checkout-ui-extensions)
- [Library of components for checkout UI extensions](https://shopify.dev/docs/api/checkout-ui-extensions/2024-01/components)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
