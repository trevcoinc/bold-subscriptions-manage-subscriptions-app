import PropTypes from 'prop-types';

export const ORDER_PROP_TYPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  shopify_customer_id: PropTypes.number.isRequired,
  interval_number: PropTypes.number.isRequired,
  interval_type_id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  customer_email: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string,
  country: PropTypes.string.isRequired,
  province: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  purchase_date: PropTypes.string.isRequired,
  last_ship_date: PropTypes.string.isRequired,
  next_ship_date: PropTypes.string.isRequired,
  discount_code_id: PropTypes.number.isRequired,
  cancel_discount_code_id: PropTypes.number.isRequired,
  billing_first_name: PropTypes.string.isRequired,
  billing_last_name: PropTypes.string.isRequired,
  billing_address1: PropTypes.string.isRequired,
  billing_address2: PropTypes.string,
  billing_country: PropTypes.string.isRequired,
  billing_province: PropTypes.string.isRequired,
  billing_city: PropTypes.string.isRequired,
  billing_zip: PropTypes.string.isRequired,
  billing_phone: PropTypes.string.isRequired,
  billing_company: PropTypes.string.isRequired,
  notes: PropTypes.string,
  taxes_included: PropTypes.number.isRequired,
  tax_shipping: PropTypes.number.isRequired,
  attributes: PropTypes.string,
  is_cancellable: PropTypes.bool.isRequired,
  cancel_reason: PropTypes.string,
  reactivatable: PropTypes.bool.isRequired,
  next_active_ship_date: PropTypes.string,
  billing_plan_id: PropTypes.number.isRequired,
  order_day: PropTypes.number,
  last_updated: PropTypes.string.isRequired,
  order_interval_type: PropTypes.shape({
    interval_type: PropTypes.string.isRequired,
    interval_text: PropTypes.string.isRequired,
    estimated_days: PropTypes.number.isRequired,
  }),
  order_fixed_recurrences: PropTypes.shape({
    bold_order_id: PropTypes.number.isRequired,
    total_recurrences: PropTypes.number.isRequired,
    recurrence_count: PropTypes.number.isRequired,
    one_charge_only: PropTypes.number.isRequired,
    recurr_after_limit: PropTypes.number.isRequired,
    last_updated: PropTypes.string.isRequired,
  }),
  order_products: PropTypes.arrayOf(PropTypes.shape({})),
  order_shipping_rate: PropTypes.shape({
    bold_order_id: PropTypes.number.isRequired,
    code: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    need_change: PropTypes.bool.isRequired,
    hash: PropTypes.string.isRequired,
  }),
  order_logs: PropTypes.arrayOf(PropTypes.shape({})),
  order_exceptions: PropTypes.arrayOf(PropTypes.shape({})),
  next_orders: PropTypes.arrayOf(PropTypes.string),
  order_product_exceptions: PropTypes.arrayOf(PropTypes.string),
  order_hooks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
  build_a_box: PropTypes.bool.isRequired,
});

export const PRODUCT_PROP_TYPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  bold_order_id: PropTypes.number.isRequired,
  properties_group_id: PropTypes.number,
  product_id: PropTypes.number.isRequired,
  variant_id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  gram: PropTypes.number.isRequired,
  product_title: PropTypes.string.isRequired,
  variant_title: PropTypes.string,
  status: PropTypes.number.isRequired,
  price_changed: PropTypes.number.isRequired,
  shopify_price: PropTypes.string.isRequired,
  shopify_new_price: PropTypes.string,
  sku: PropTypes.string.isRequired,
  shopify_inventory: PropTypes.number,
  inventory_management: PropTypes.string,
  taxable: PropTypes.number.isRequired,
  properties: PropTypes.string,
  vendor: PropTypes.string.isRequired,
  is_active: PropTypes.bool.isRequired,
  last_updated: PropTypes.string.isRequired,
});

export const MESSAGE_PROP_TYPE = PropTypes.shape({
  message: PropTypes.string,
  messageTextKey: PropTypes.string,
  type: PropTypes.string,
});
