import { useDispatch } from "react-redux";
import { Button } from '@material-ui/core/';

import { setFilter } from '../../../../redux/actions';
import { VISIBILITY_FILTERS } from "../../../../constans";

import './style.scss';

export const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();
  const mappedFilters: any = VISIBILITY_FILTERS;

  return (
    <div>
      {Object.keys(mappedFilters).map((filterKey: string) => {
        const currentFilter = mappedFilters[filterKey];

        return (
          <Button
            key={currentFilter} onClick={() => dispatch(setFilter(currentFilter))}
          >{currentFilter}
          </Button>
        )
      })}
    </div>
  )
}
