import {
  Banner,
  useAppMetafields,
  useLanguage,
  useSettings,
  useTranslate,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  /* Localization
  If your Shopify has only 1 language, the banner's content will be added by the merchant through the settings in the Checkout Editor
  const {
    banner_title: merchantTitle,
    banner_description: merchantDescription,
    banner_collapsible: merchantCollapsible,
    banner_status: merchantStatus
  } = useSettings();
  */

  // If your Shopify has more than 1 language, the banner's translated content will be added by the merchant through a metafield (type JSON) on the Shop model
  const {
    banner_collapsible: merchantCollapsible,
    banner_status: merchantStatus
  } = useSettings();

  // Set default values
  const collapsible = merchantCollapsible ?? false
  const status = merchantStatus ?? 'success';
  let title = translate('banner_title');
  let description = translate('banner_description');

  const language = useLanguage();
  const currentLocale = language?.isoCode?.split('-')[0].toLowerCase();

  const configMetafield = useAppMetafields({
    type: "shop",
    namespace: "checkout-banner-translations",
    key: "config"
  });

  if (configMetafield) {
    const jsonString = configMetafield[0]?.metafield?.value;
    if (jsonString) {
      const json = JSON.parse(jsonString);
      title = json[currentLocale].banner_title;
      description = json[currentLocale].banner_description;
    }
  }

  return (
    <Banner title={title} collapsible={collapsible} status={status}>
     {description}
    </Banner>
  );
}
