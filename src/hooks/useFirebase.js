import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// import { useAuth } from '../context/authContext';
import { db } from '../firebase';

export const useFirebase = (currentUser) => {
  console.log('>>>currentUser', currentUser);
  const [characterList, setCharacterList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading('Loading...');
      setError(null);
      setCharacterList(null);
      try {
        const currentUserId = currentUser.uid;
        const collectionRef = await collection(db, 'characters');
        const q = query(collectionRef, where('userId', '==', currentUserId));
        const snap = await getDocs(q);
        console.log('snap', snap);
        let list = [];
        snap.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data()
          });
        });
        if (list.length < 1) {
          console.log('no characters!');
          setError('Could not retrieve any saved characters.');
          return;
        }
        console.log('list', list);
        setCharacterList(list);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Fetch error.');
      }
    };
    fetchCharacter();
  }, []);

  return { characterList, loading, error };
};
