import { useAppSelector } from '@/redux/hooks';
import { selectUser } from '@/redux/store/slices/userSlice';
import { getStorageData } from '@/utils';
import React from 'react';

const AdminProfile = (): JSX.Element => {
  const user = useAppSelector(selectUser);
  console.log('user', user)
  return (
    <div>
      this is admin profile
    </div>
  )
}

export default AdminProfile;