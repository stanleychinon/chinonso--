
function App() {

  return (
    <div>
      <nav className='flex items-center justify-between px-[70px] py-[30px]'>
        <img src="/logo (1).svg" alt="" />
        <ul className='flex gap-20'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Testimonial</a>
          </li>
        </ul>
        <button className='bg-[#F25F3A] px-[20px] py-[10px] rounded-[40px]'>Get Started</button>
      </nav>
      <main>
        <div className='flex items-center gap-[70px] py-[100px] px-[70px]'>
          <div>
            <b className='text-[70px] leading-[80px]'>Bring everyone together to build better products.</b>
            <p className='py-[30px]'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <button className='bg-[#F25F3A] px-[20px] py-[10px] rounded-[40px]'>Get Started</button>
          </div>
          <img src="/illustration-intro.svg" alt="" />
        </div>
      </main>
      <section>
          <div className='flex px-[70px] gap-[100px]'>
          <div>
          <b className='text-[40px]'>What’s different about Manage?</b>
          <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
          </div>
          <div>
          <div>
          <p>01</p>
          <b className='text-[20px]'>Track company-wide progress</b>
          <p className='py-[40px]'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
          </div>     
         <div>
         <p>02</p>
          <b className='text-[20px]'>Advanced built-in reports </b>
          <p className='py-[40px]'>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
         </div>
         <div>
         <p>03</p>
          <b className='text-[20px]'>Everything you need in one place</b>
          <p className='py-[40px]'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
         </div>
          </div>
          </div>
      </section>
      <section>
        <div className='px-[70px]'>
        <div className='text-center text-[40px] py-[70px]'>
        <b>What they've said</b>
        </div>
        <div className='flex gap-[50px]'>
        <div className='text-center		bg-[#FFEFEB]'>
          <img src="/avatar-ali.png" alt="" className='mx-auto w-[40%]'/>
          <div>
          <b className='py-[10px]'>Ali bravo</b>
          <p className='py-[10px]'>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
          </div>
        </div>
        <div className='text-center	bg-[#FFEFEB]'>
          <img src="/avatar-anisha.png" alt="" className='mx-auto w-[40%]'/>
          <div>
          <b>Anisha ani</b>
          <p className='py-[10px]'>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
          </div>
        </div>
        <div className='text-center		bg-[#FFEFEB]'>
          <img src="/avatar-richard.png" alt="" className='mx-auto w-[40%]'/>
          <div>
          <b>Richards Watts</b>
          <p className='py-[10px]'>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
          </div>
        </div>
        <div className='text-center		bg-[#FFEFEB]'>
          <img src="/avatar-shanai.png" alt="" className='mx-auto w-[40%]'/>
          <div>
          <b>Shanai Gough</b>
          <p className='py-[10px]'>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
          </div>
        </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default App
