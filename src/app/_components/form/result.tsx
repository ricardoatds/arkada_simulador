import React from 'react'
import Underline from '../underline'
import Pack from './pack'
import JsonData from '../../packs.json';
import FAQ from '../faq';
import Clarifications from '../clarifications';
import ScheduleButton from '../scheduleButton';

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
  resultText: string;
  allFeatures: string[];
  packs: PackDefinition[];
  prices: PriceDefinition[];
}

export default function Result(props: ResultProps) {
  console.log(props.finalCode)
  const [selectedPack, setSelectedPack] = React.useState('Base');

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

    const included = packData.allFeatures.map((feature, index) => {
      const featureId = index + 1;
      if (!pack.features.includes(featureId)) return null;
      
      // Check if this feature has an override
      const override = pack.featuresOverrides?.find(
        override => override.featureId === featureId
      );
      
      // Return override description if exists, otherwise return original feature
      return override ? override.featureName : feature;
    }).filter((feature): feature is string => feature !== null);
    
    const notIncluded = packData.allFeatures.map((feature, index) => {
      const featureId = index + 1;
      if (pack.features.includes(featureId)) return null;
      
      const override = pack.featuresOverrides?.find(
        override => override.featureId === featureId
      );
      
      return override ? override.featureName : feature;
    }).filter((feature): feature is string => feature !== null);

    return { included, notIncluded };
  }

  const essentialFeatures = getPackFeatures(0);
  const baseFeatures = getPackFeatures(1);
  const completeFeatures = getPackFeatures(2);

  return (
    <div className='fade-in mt-8 sm:max-w-[875px] mb-16 flex flex-col items-center'>
      <p className='max-w-[300px] sm:max-w-[580px] font-display text-[14px] sm:text-[18px] font-medium text-center flex-grow'>{packData.resultText}</p>
      <div className=' mt-8 relative flex items-center justify-between w-full gap-0'>
        <Underline className='w-20 sm:w-32 h-3 shrink-0' />
        <p className='sm:max-w-[580px] font-display text-[14px] sm:text-[18px] font-bold text-center flex-grow'>
          Escolha a sua Opção !
        </p>
        <Underline className='w-20 sm:w-32 h-3 shrink-0' />
      </div>
      
      <div className='flex flex-col sm:flex-row mt-8 gap-4 sm:gap-2 max-w-full sm:w-auto'>
        <Pack
          onSelected={setSelectedPack}
          highlighted={selectedPack == "Essencial"}
          name="Essencial"
          finalPrice={prices.essencial}
          vatPrice={prices.essencial * 1.23}
          featuresIncluded={essentialFeatures.included}
          featuresNotIncluded={essentialFeatures.notIncluded}
        />
        <Pack
          onSelected={setSelectedPack}
          highlighted={selectedPack == "Base"}
          name="Base"
          finalPrice={prices.base}
          vatPrice={prices.base * 1.23}
          featuresIncluded={baseFeatures.included}
          featuresNotIncluded={baseFeatures.notIncluded}
        />
        <Pack
          onSelected={setSelectedPack}
          highlighted={selectedPack == "Completo"}
          name="Completo"
          finalPrice={prices.completo}
          vatPrice={prices.completo * 1.23}
          featuresIncluded={completeFeatures.included}
          featuresNotIncluded={completeFeatures.notIncluded}
        />
      </div>
      <div className='mt-16 relative flex items-center justify-between w-full gap-0'>
        <Underline className='w-20 sm:w-32 h-3 shrink-0' />
        <p className='sm:max-w-[580px] font-display text-[14px] sm:text-[18px] font-bold text-center flex-grow'>
          Investimento Inicial Apenas 27€
        </p>
        <Underline className='w-20 sm:w-32 h-3 shrink-0' />
      </div>
      <ScheduleButton code={props.finalCode} selectedPlan={selectedPack}/>
      <p className='mt-10 mb-16 text-[12px] sm:text-[18px] font-display font-light text-center'>
        Fará apenas o <span className='font-semibold'>investimento inicial de 27€</span> para agendamento de reunião conforme a sua disponibilidade.<br className='hidden sm:inline' />
        Isto ajuda a cobrir os custos com os diversos agendamentos que temos. Receberá este valor de volta em
        formato de desconto caso adquira um dos nossos planos
      </p>
      <Clarifications code={props.finalCode} selectedPlan={selectedPack}/>
      <FAQ/>
    </div>
  );
}