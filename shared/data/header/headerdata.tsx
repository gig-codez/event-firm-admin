import dynamic from 'next/dynamic';
const Searchable = dynamic(() => import('react-searchable-dropdown'), { ssr: false });

export default function Selectoptions() {
  interface SearchableProps extends React.HTMLProps<HTMLDivElement> {
    value: string;
    placeholder: string;
    notFoundText: string;
    noInput?: boolean;
    options: { value: string; label: string }[];
    listMaxHeight?: number;
  }

  const searchableProps: SearchableProps = {
    value: 'test',
    placeholder: 'Choose one',
    notFoundText: 'No result found',
    noInput: true,
    options: [
      {
        value: 'Microsoft Project',
        label: 'Microsoft Project',
      },
      {
        value: 'Risk Management',
        label: 'Risk Management',
      },
      {
        value: 'business case',
        label: 'Business Case',
      },
      {
        value: 'team building',
        label: 'Team Building',
      },
      {
        value: 't-projects',
        label: 'T-Projects',
      },
    ],
    listMaxHeight: 140,
  };
  return (
    <div >
 
      <Searchable {...searchableProps}/>
    </div>
  );
}