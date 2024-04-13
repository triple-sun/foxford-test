import { useCallback, useEffect, useState } from 'react';
import {
  getAreResponsesLoaded,
  getResponses,
} from '../store/responses/responses.selectors';
import useAppSelector from './use-app-selector';
import useAppDispatch from './use-app-dispatch';
import { fetchResponsesAction } from '../store/responses/responses.api.actions';

type TResponsesQuery = { page?: number };

const useFoundUsers = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const responses = useAppSelector(getResponses);

  const dispatch = useAppDispatch();

  const fetchResponses = useCallback(
    (data: TResponsesQuery) => {
      dispatch(fetchResponsesAction(data));
      setIsLoaded(true);
    },
    [dispatch]
  );

  useEffect(() => {
    fetchResponses({})
    setIsLoaded(true)
  }, [isLoaded]);

  return {
    responses,
    isLoaded,
  };
};

export default useFoundUsers;
