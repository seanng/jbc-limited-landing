import FreshDurianModal from './modals/FreshDurianModal'
import FrozenDurianModal from './modals/FrozenDurianModal'
import FoodletModal from './modals/FoodletModal'
import DurianPasteModal from './modals/DurianPasteModal'

export default {
  "Protective Equipment": [
    {
      label: 'Medical and surgical masks',
      Component: '<></>'
    },
    {
      label: 'Protective clothing',
      Component: '<></>'
    },
    {
      label: 'Protective gown',
      Component: '<></>'
    },
    {
      label: 'Face shield',
      Component: '<></>'
    },
    {
      label: 'Goggle',
      Component: '<></>'
    },
    {
      label: 'COVID-19 testing kits',
      Component: '<></>'
    },
    {
      label: 'Nitrile gloves',
      Component: '<></>'
    },
  ],
  "Seafood": [
    {
      label: 'Species',
      page: 'seafood-species'
    },
    {
      label: 'Battered & breaded products',
      page: 'seafood-battered-breaded'
    },
    {
      label: 'Salted products',
      page: 'seafood-salted'
    },
    {
      label: 'Seasonal products',
      page: 'seafood-seasonal'
    },
    {
      label: 'Brands',
      Component: '<></>'
    },
  ],
  "Durian": [
    {
      label: 'Fresh durian',
      Component: FreshDurianModal
    },
    {
      label: 'Frozen durian',
      Component: FrozenDurianModal,
    },
    {
      label: 'Foodlet',
      Component: FoodletModal,
    },
    {
      label: 'Durian Paste',
      Component: DurianPasteModal
    },
  ],
}