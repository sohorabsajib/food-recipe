import  { useContext } from 'react'
import RecipeItem from '../recipe-list';
import { GlobalContext } from '../../context';

export default function Favourites() {
  const {favoritesList} = useContext(GlobalContext);
  
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favoritesList&& favoritesList.length > 0?
        favoritesList.map((item)=> <RecipeItem key={item.id} item={item}></RecipeItem>)
        :<div>
          <p className='lg-4xl text-xl text-center text-bold'>
            Nothing is added to favourites
          </p>
          
        </div>
      }
    </div>
  )
}
