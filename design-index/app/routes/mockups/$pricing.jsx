import {useParams} from 'react-router';
import Grid from '../../components/grid.jsx';


export default function Pricing() {
  const { pricing } = useParams();
  

  return (
    <Grid items={pricing} category="mockup" />
  );
}
