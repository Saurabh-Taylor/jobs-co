import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';



export default async function Home() {

    const user = await currentUser();
    console.log(user);

    const userProfileInfo = user
    console.log("userProfileInfo:"+userProfileInfo);

    if(user && !userProfileInfo?._id){ redirect('/onboard')}

 return (
  <section>Main section</section>
 )
}
