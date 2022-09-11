import { useAppSelector } from '@/redux/hooks';
import { selectUser } from '@/redux/store/slices/userSlice';
import React from 'react';

const AdminProfile = (): JSX.Element => {
  const user = useAppSelector(selectUser);
  return (
    <div>
      {user.id} {user.name}
    </div>
  )
}

export default AdminProfile;