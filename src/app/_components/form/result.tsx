import React from 'react'
import Underline from '../underline'
import Pack from './pack'
import JsonData from '../../packs.json';

interface ResultProps {
  finalCode: string
}

interface PackPrices {
  essencial: number;
  base: number;
  completo: number;
}

interface PackFeature {
  featureId: number;
  featureName: string;
}

interface PackDefinition {
  name: string;
  features: number[];
  featuresOverrides?: PackFeature[];
}

interface PriceDefinition {
  code: string;
  priceEssencial: number;
  priceBase: number;
  priceCompleto: number;
}

interface PackData {
  code: string;
  allFeatures: string[];
  packs: PackDefinition[];
  prices: PriceDefinition[];
}

export default function Result(props: ResultProps) {
  const getPackPrices = (packData: PackData, finalCode: string): PackPrices => {
    const prices = packData.prices.find((price) => price.code === finalCode);
    return {
      essencial: prices?.priceEssencial ?? 0,
      base: prices?.priceBase ?? 0,
      completo: prices?.priceCompleto ?? 0
    };
  }

  const getPackData = (): PackData | undefined => {
    const typeCode = props.finalCode.charAt(0);
    return JsonData.find((data: PackData) => data.code === typeCode);
  }

  const packData = getPackData();
  if (!packData) return null;

  const prices = getPackPrices(packData, props.finalCode);

  const getPackFeatures = (packIndex: number) => {
    const pack = packData.packs[packIndex];
    if (!pack) return { included: [], notIncluded: [] };

    const included = packData.allFeatures.filter((_, index) => 
      pack.features.includes(index + 1)
    );
    
    const notIncluded = packData.allFeatures.filter((_, index) => 
      !pack.features.includes(index + 1)
    );

    return { included, notIncluded };
  }

  const essentialFeatures = getPackFeatures(0);
  const baseFeatures = getPackFeatures(1);
  const completeFeatures = getPackFeatures(2);

  return (
    <div className='mt-16 max-w-[875px] mb-16 flex flex-col items-center'>
      <div className='relative flex items-center justify-between w-full gap-2'>
        <Underline className='w-32 h-3 shrink-0' />
        <p className='max-w-[580px] font-display text-[18px] font-bold text-center flex-grow'>
          Escolha a sua Opção !
        </p>
        <Underline className='w-32 h-3 shrink-0' />
      </div>
      <p className='mt-8 text-[18px] font-display font-light text-center'>
        Fará apenas o <span className='font-semibold'>investimento inicial de 27€</span> para agendamento de reunião conforme a sua disponibilidade.<br />
        Isto ajuda a cobrir os custos com os diversos agendamentos que temos. Receberá este valor de volta em
        formato de desconto caso adquira um dos nossos planos
      </p>
      <div className='flex flex-row mt-8 gap-2'>
        <Pack
          onSelected={console.log}
          highlighted={false}
          name="Essencial"
          finalPrice={prices.essencial}
          vatPrice={prices.essencial * 1.23}
          featuresIncluded={essentialFeatures.included}
          featuresNotIncluded={essentialFeatures.notIncluded}
        />
        <Pack
          onSelected={console.log}
          highlighted={true}
          name="Base"
          finalPrice={prices.base}
          vatPrice={prices.base * 1.23}
          featuresIncluded={baseFeatures.included}
          featuresNotIncluded={baseFeatures.notIncluded}
        />
        <Pack
          onSelected={console.log}
          highlighted={false}
          name="Completo"
          finalPrice={prices.completo}
          vatPrice={prices.completo * 1.23}
          featuresIncluded={completeFeatures.included}
          featuresNotIncluded={completeFeatures.notIncluded}
        />
      </div>
    </div>
  );
}
