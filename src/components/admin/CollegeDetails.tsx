// import { setUser } from '@/redux/store/slices/userSlice';
import { fetchUser } from '@/service/user.service';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CollegeDetails = (): JSX.Element => {

  const { data, isLoading, hasError } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser() as any)
  }, [dispatch])

  return (
    <div>
      {
        isLoading ? <div>loading...</div> : <button>{`${data.name} ${data.email}`}</button>
      }
    </div>
  )
}

export default CollegeDetails;