
import level1 from '/Assets_ChasChallenge/Cards/Nivåer/Nivå1_active.svg';
import level2 from '/Assets_ChasChallenge/Cards/Nivåer/Nivå2_active.svg';
import level3 from '/Assets_ChasChallenge/Cards/Nivåer/Nivå3_active.svg';
import level4 from '/Assets_ChasChallenge/Cards/Nivåer/Nivå4_active.svg';
import level5 from '/Assets_ChasChallenge/Cards/Nivåer/Nivå5_active.svg';
import presentSvg from '/Assets_ChasChallenge/Cards/Nivåer/Present_closed.svg';

const UserLevels = () => {

  return (
    <div>
        <div
            className="grid grid-cols-6 gap-3
            mt-[33px]"
         >
            <img src={level1} alt="" />
            <img src={level2} alt="" />
            <img src={level3} alt="" />
            <img src={level4} alt="" />
            <img src={level5} alt="" />
            <img src={presentSvg} alt="" />
         </div>
    </div>
  )
}

export default UserLevels