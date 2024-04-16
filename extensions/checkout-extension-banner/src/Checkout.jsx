import {
  Banner,
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
  const { banner_title: merchantTitle, banner_description: merchantDescription, collapsible, banner_status: merchantStatus } = useSettings();
  const title = merchantTitle ?? translate('banner_title')
  const description = merchantDescription ?? translate('banner_description')
  const status = merchantStatus ?? 'success'

  return (
    <Banner title={title} collapsible={collapsible} status={status}>
      {description}
    </Banner>
  );
}