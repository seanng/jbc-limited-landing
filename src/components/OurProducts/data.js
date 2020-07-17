import N99 from '../../assets/img/products/ppe/N99 NIOSH-Approved.png';
import N95 from '../../assets/img/products/ppe/N95 NIOSH-Approved.png';
import SurgicalMask from '../../assets/img/products/ppe/Surgical or Medical or Non-Medical Face Mask.png';
import KN95 from '../../assets/img/products/ppe/KN95 Mask.png';
import SurgicalGown from '../../assets/img/products/ppe/Surgical Gown.png';
import FaceShield from '../../assets/img/products/ppe/Face Shield.png';
import Goggle from '../../assets/img/products/ppe/Goggle.jpeg';
import AlcoholHandSanitizer from '../../assets/img/products/ppe/Alcohol Hand Sanitizer.png';
import ElectrostaticBackpackSprayer from '../../assets/img/products/ppe/Electrostatic Backpack Sprayer.jpg';
import IsolationGown from '../../assets/img/products/ppe/Non-Surgical Isolation Gown (2).jpeg';
import MedicalPowderFree from '../../assets/img/products/ppe/Medical, Powder free, Nitrile Examination Gloves, thickness 6 millimetre.png';
import AlcoholWipes from '../../assets/img/products/ppe/Alcohol Wipes.jpeg';
import DisposableProtectiveClothing from '../../assets/img/products/ppe/Medical Disposable Protective Clothing with hood.png';

import FreshDurian1 from '../../assets/img/products/durian/Fresh/1.jpg';
import FreshDurian4 from '../../assets/img/products/durian/Fresh/4.jpg';
import FreshDurian5 from '../../assets/img/products/durian/Fresh/5.jpeg';
import FrozenDurian1 from '../../assets/img/products/durian/Frozen/Frozen Whole Durian.jpg';
import FrozenDurian2 from '../../assets/img/products/durian/Frozen/Vacuum Packed Frozen Durian.jpg';
import DurianPaste from '../../assets/img/products/durian/Durian paste/Durian Paste.jpeg';
import Foodlet3 from '../../assets/img/products/durian/foodlet/foodlet3.jpg';

import BreadedFillet from '../../assets/img/products/seafood/bnb/Breaded Fillet.jpg';
import BreadedSaw from '../../assets/img/products/seafood/bnb/Breaded Saw Portion.jpg';
import FishFinger from '../../assets/img/products/seafood/bnb/Fish Finger.jpg';
import PopcornFish from '../../assets/img/products/seafood/bnb/Popcorn Fish.jpg';
import TempuraCocktail from '../../assets/img/products/seafood/bnb/Tempura Cocktail.jpg';
import TempuraFillet from '../../assets/img/products/seafood/bnb/Tempura Fillet.jpg';

import APSaltedFillet from '../../assets/img/products/seafood/salted/Alaska Pollock Fully Salted Fillet.jpg';
import APSaltedMigas from '../../assets/img/products/seafood/salted/Alaska Pollock Fully Salted Migas.jpg';
import APSaltedPortion from '../../assets/img/products/seafood/salted/Alaska Pollock Fully Salted Portion.jpg';
import ACSplitFillet from '../../assets/img/products/seafood/salted/Atlantic Cod Fully Salted Split Fillet.jpg';
import ACLightlyFillet from '../../assets/img/products/seafood/salted/Atlantic Cod Lightly Salted Fillet.jpg';
import ACLightlyPortion from '../../assets/img/products/seafood/salted/Atlantic Cod Lightly Salted Portion.jpg';

import ProtectiveWearModal from './modals/ProtectiveWear'
import MasksModal from './modals/Masks'
import OtherItemsModal from './modals/OtherItems'
import FreshDurianModal from './modals/FreshDurian'
import FrozenDurianModal from './modals/FrozenDurian'
import FruitletDurianModal from './modals/FruitletDurian'
import DurianPasteModal from './modals/DurianPaste'

export default {
  'Personal Protective Equipment': [
    {
      label: 'Medical and Surgical Masks',
      description: '',
      Component: MasksModal,
      data: [
        {
          img: KN95,
          caption: 'KN95 Mask (NIOSH or Non-NIOSH Approved)',
        },
        {
          img: N99,
          caption: 'N99 Respirator\nNIOSH-Approved',
        },
        {
          img: N95,
          caption: 'N95 Respirator\nNIOSH-Approved',
        },
        {
          img: SurgicalMask,
          caption: 'Surgical or Medical or Non-Medical Face Mask',
        },
      ],
    },
    {
      label: 'Protective Wear',
      Component: ProtectiveWearModal,
      description: '',
      data: [
        {
          img: DisposableProtectiveClothing,
          caption: 'Medical Disposable Protective Clothing with hood',
        },
        {
          img: SurgicalGown,
          caption: 'Surgical Gown',
        },
        {
          img: IsolationGown,
          caption: 'Non-Surgical Isolation Gown',
        },
        {
          img: FaceShield,
          caption: 'Face Shield',
        },
      ],
    },
    {
      label: 'Other Items',
      Component: OtherItemsModal,
      description: '',
      data: [
        {
          img: ElectrostaticBackpackSprayer,
          caption: 'Electrostatic Backpack Sprayer',
        },
        {
          img: AlcoholHandSanitizer,
          caption: 'Alcohol Hand Sanitizer',
        },
        {
          img: Goggle,
          caption: 'Goggle',
        },
        {
          img: MedicalPowderFree,
          caption:
            'Medical, Powder free, Nitrile Examination Gloves, thickness 6 millimetre',
        },
        {
          img: AlcoholWipes,
          caption: '75% Alcohol Wipes',
        },
      ],
    },
  ],
  Seafood: [
    {
      label: 'Species',
      page: 'seafood-species',
    },
    {
      label: 'Battered & Breaded Products',
      description: '',
      data: [
        {
          img: BreadedFillet,
          caption: 'Breaded Fillet',
        },
        {
          img: BreadedSaw,
          caption: 'Breaded Saw Portion',
        },
        {
          img: FishFinger,
          caption: 'Fish Fingers',
        },
        {
          img: PopcornFish,
          caption: 'Popcorn Fish',
        },
        {
          img: TempuraCocktail,
          caption: 'Tempura Cocktail',
        },
        {
          img: TempuraFillet,
          caption: 'Tempura Fillet',
        },
      ],
    },
    {
      label: 'Salted Products',
      description: '',
      data: [
        {
          img: APSaltedFillet,
          caption: 'Alaska Pollock Fully Salted Fillet',
        },
        {
          img: APSaltedMigas,
          caption: 'Alaska Pollock Fully Salted Migas',
        },
        {
          img: APSaltedPortion,
          caption: 'Alaska Pollock Fully Salted Portion',
        },
        {
          img: ACSplitFillet,
          caption: 'Atlantic Cod Fully Salted Split Fillet',
        },
        {
          img: ACLightlyFillet,
          caption: 'Atlantic Cod Lightly Salted Fillet',
        },
        {
          img: ACLightlyPortion,
          caption: 'Atlantic Cod Lightly Salted Portion',
        },
      ],
    },
  ],
  Durian: [
    {
      label: 'Fresh Durian',
      Component: FreshDurianModal,
      description:
        'Fresh durians flown in from Malaysia on a weekly basis when the fruit is in season. \n\nMalaysian durians are harvested only when they are ripe and fall from the trees unlike Thai durians which are plucked from the trees and ripen in the cargo containers on the journey to its final destination. \n\nWe offer popular species such as Musang King, D24, XO, D13, and D101 as well as highly sought after species such as Black Thorn and Red Prawn when in season.',
      data: [
        {
          img: FreshDurian1,
          caption: 'D197 AA - Musang King',
        },
        {
          img: FreshDurian4,
          caption: 'D97 AA - Musang King and D24 Sultan',
        },
        {
          img: FreshDurian5,
          caption: 'D24 Sultan',
        },
      ],
    },
    {
      label: 'Frozen Durian',
      Component: FrozenDurianModal,
      description:
        'The main season in Malaysia is from June to August with a smaller season from December to January. Now, however, with the aid of the latest freezing technology, the durians are harvest during season and frozen immediately to be enjoyed any time of the year.\n\nThe ripened durians are harvested when they fall from the trees and inspected for cracks or punctures in the shells. Only fruits with perfect outer shells are then washed and frozen in a nitrogen freezer under -100 degrees for about 1 hour. Each durian is then vacuum packed and is ready for shipment to destinations around the world. \n\nSimply defrost the durian in room temperature, remove the fruitlets from the shell and enjoy the durian out of season.',
      data: [
        {
          img: FrozenDurian1,
          caption: 'Frozen Whole Durian',
        },
        {
          img: FrozenDurian2,
          caption: 'Vacuum Packed Frozen Durian',
        },
      ],
    },
    {
      label: 'Fruitlet',
      description:
        'Enjoy durian without the inconvenience of prying open the shells. Our durian fruitlets are shelled and frozen to preserve the freshness and tastes as soon as they are harvested. The fruitlet lends well to freezing - its texture and flavour is maintained during the freezing process. Packed in 1kg vacuum bags, the durian fruitlet can be kept in the freezer to be enjoyed throughout the year.',
      Component: FruitletDurianModal,
      data: [
        {
          img: Foodlet3,
          caption: 'Frozen Durian Fruitlet',
        },
      ],
    },
    {
      label: 'Durian Paste',
      description:
        'Durian paste is made from the flesh of the durian, without the seeds. \n\nPacked in 2 kg bags, the paste is used as a filling or flavoring for many kinds of desserts from pastries to ice cream.',
      Component: DurianPasteModal,
      data: [
        {
          img: DurianPaste,
          caption: 'Durian paste',
        },
      ],
    },
  ],
};
