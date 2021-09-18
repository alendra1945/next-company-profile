import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContactMessage } from 'src/redux/features/contactUs';
export default function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createContactMessage({}));
  }, []);
  return (
    <div className="bg-gray80">
      <h1 className="text-red10">alen</h1>
    </div>
  );
}
