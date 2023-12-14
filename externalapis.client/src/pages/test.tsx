import http from '@/lib/http';
import { useEffect, useState } from 'react';

interface Test {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const Test = () => {
  const [data, setData] = useState<Test[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    http
      .get<Test[]>('/Test')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <p key={item.id}>{item.title}</p>)
      )}
    </div>
  );
};
export default Test;
