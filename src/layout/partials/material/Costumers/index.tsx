import React from 'react';
import { CostumersContext } from '../../../../state/contexts/CostumersContext';
import { Grid } from '@mui/material';
import { CostumerCard } from '../../../../modules/mui_components/Card';
import { Costumer } from '../../../../modules/types/Costumer';

interface Props {
  searched: string;
}

export const Costumers: React.FC<Props> = ({ searched }) => {
  const {
    getCostumersByName,
    getAllCostumers,
    setCostumersToDisplay: setContextCostumers,
    costumersToDisplay: contextCostumers,
  } = React.useContext(CostumersContext);
  const [costumersToDisplay, setCostumersToDisplay] = React.useState(
    [] as Array<Costumer>,
  );

  React.useEffect(() => {
    const found = getCostumersByName(searched);
    setCostumersToDisplay(found);
  }, [searched]);

  React.useEffect(() => {
    (async () => {
      const res = await getAllCostumers();
      setCostumersToDisplay(res);
      setContextCostumers(res);
    })();
  }, []);

  React.useEffect(() => {
    setCostumersToDisplay(contextCostumers);
  }, [contextCostumers]);

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {costumersToDisplay.map((costumer, index) => (
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          sx={{
            display: 'flex',
            aliginItems: 'center',
            justifyContent: 'center',
          }}
          key={index}
        >
          <CostumerCard costumer={costumer} key={index} />
        </Grid>
      ))}
    </Grid>
  );
};
