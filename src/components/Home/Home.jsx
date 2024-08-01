
import RecipeItem from '../recipe-list'
import { GlobalContext } from '../../context';
import { useContext } from 'react';

export default function Home() {
  const {loading,recipeList} = useContext(GlobalContext);
  if(loading) return <div>Loading...</div>
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        recipeList&& recipeList.length > 0?
        recipeList.map((item)=> <RecipeItem key={item.id} item={item}></RecipeItem>)
        :<div>
          <p className='lg-4xl text-xl text-center text-bold'>Nothing to show.Please search something</p>
          
        </div>
      }
    </div>
  )
}
