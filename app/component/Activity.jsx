import { fn } from '@/utils/utilityfunctions'
import { Icon } from '@iconify/react'


const Activity = () => {
  return (
    <>
                            {/* Activity Part */}
            
                            <section>
                <p className={`text-h6 font-semibold`}>Activities</p>
                <div className={`flex flex-col gap-4`}>

                <div className={`flex items-center justify-between`}>
                    <div className={`flex items-center gap-4`}>
                        <Icon className={`text-emBlue`} fontSize={fn.rem(41)} icon='fluent:people-community-20-regular' />
                        <p>Followers</p>
                        </div>
                        <p>1000</p>
                    </div>

                    <div className={`flex items-center justify-between`}>
                    <div className={`flex items-center gap-4`}>
                        <Icon className={`text-emBlue`} fontSize={fn.rem(41)} icon='fluent:people-20-regular' />
                        <p>Following</p>
                    </div>
                        <p>1000</p>
                    </div>

                    <div className={`flex items-center justify-between`}>
                    <div className={`flex items-center gap-4`}>
                        <Icon className={`text-emBlue`} fontSize={fn.rem(41)} icon='solar:chat-square-like-linear' />
                        <p>Likes</p>
                        </div>
                        <p>500</p>
                    </div>
                </div>
            </section>
            <hr className={`my-5`} />
    
    
    </>
  )
}



// const ActivityDisappear = () => {
//     const [activityTemplateVisble, setActivityTemplateVisibility] = useState(false);


//     // if pathname is equals to "home" hide the activity component

//     useEffect(() => {
//         if (pathname === `/`) {
//             activityTemplateVisble(true);
//         } else {
//             setActivityTemplateVisibility(false);
//         }
//     }, [activityTemplateVisble]);

//     const postCardList = ActivityDisappear.map((post) => {
//         return <PostCard post={post} key={post.id} />;
//     });

//     return (
//         <main>
//             <section className={`mb-4`} hidden={activityTemplateVisble}>
//                 <PostsubmissionTemplate />
//             </section>
//             <section className={`mb-4 flex flex-col gap-4`}>{SideBar}</section>
//         </main>
//     );
// };
// export default ActivityDisappear;