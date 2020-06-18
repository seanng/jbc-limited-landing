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
import DisposableProtectiveClothing from '../../assets/img/products/ppe/Medical Disposable Protective Clothing with hood.png';

import FreshDurian1 from '../../assets/img/products/durian/Fresh/1.jpg';
import FreshDurian2 from '../../assets/img/products/durian/Fresh/2.1.jpeg';
import FreshDurian22 from '../../assets/img/products/durian/Fresh/2.2.jpg';
import FreshDurian3 from '../../assets/img/products/durian/Fresh/3.jpg';
import FreshDurian4 from '../../assets/img/products/durian/Fresh/4.jpg';
import FreshDurian5 from '../../assets/img/products/durian/Fresh/5.jpeg';
import FrozenDurian1 from '../../assets/img/products/durian/Frozen/FrozenDurian1.jpg';
import FrozenDurian2 from '../../assets/img/products/durian/Frozen/FrozenDurian2.jpg';
import DurianPaste from '../../assets/img/products/durian/Durian paste/Durian Paste.jpeg';
import Foodlet1 from '../../assets/img/products/durian/foodlet/foodlet1.jpg';
import Foodlet2 from '../../assets/img/products/durian/foodlet/foodlet2.jpg';
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

export default {
  'Personal Protective Equipment': [
    {
      label: 'Medical and surgical masks',
      data: [
        {
          img: KN95,
          caption: 'KN95 Mask',
        },
        {
          img: N99,
          caption: 'N99 NIOSH-Approved',
        },
        {
          img: N95,
          caption: 'N95 NIOSH-Approved',
        },
        {
          img: SurgicalMask,
          caption: 'Surgical or Medical or Non-Medical Face Mask',
        },
      ],
    },
    {
      label: 'Protective wear',
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
      ],
    },
  ],
  Seafood: [
    {
      label: 'Species',
      page: 'seafood-species',
    },
    {
      label: 'Battered & breaded products',
      data: [
        {
          img: BreadedFillet,
          caption: 'Breaded Fillet',
        },
        {
          img: BreadedSaw,
          caption: 'Breaded Saw',
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
      label: 'Salted products',
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
    {
      label: 'Brands',
      Component: '<></>',
    },
  ],
  Durian: [
    {
      label: 'Fresh durian',
      data: [
        {
          img: FreshDurian1,
          caption: 'Fresh Durian 1',
        },
        {
          img: FreshDurian2,
          caption: 'Fresh Durian 2',
        },
        {
          img: FreshDurian22,
          caption: 'Fresh Durian 2.2',
        },
        {
          img: FreshDurian3,
          caption: 'Fresh Durian 3',
        },
        {
          img: FreshDurian4,
          caption: 'Fresh Durian 4',
        },
        {
          img: FreshDurian5,
          caption: 'Fresh Durian 5',
        },
      ],
    },
    {
      label: 'Frozen durian',
      data: [
        {
          img: FrozenDurian1,
          caption: 'Frozen Durian 1',
        },
        {
          img: FrozenDurian2,
          caption: 'Frozen Durian 2',
        },
        {
          img: FrozenDurian2,
          caption: 'Frozen Durian 2',
        },
      ],
    },
    {
      label: 'Foodlet',
      data: [
        {
          img: Foodlet1,
          caption: 'Foodlet1',
        },
        {
          img: Foodlet2,
          caption: 'Foodlet2',
        },
        {
          img: Foodlet3,
          caption: 'Foodlet3',
        },
      ],
    },
    {
      label: 'Durian Paste',
      data: [
        {
          img: DurianPaste,
          caption: 'Durian Paste',
        },
      ],
    },
  ],
};
