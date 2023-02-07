

function Nav () {
    return (
      <div className='flex justify-between ml-[70px] mr-[70px] mb-[30px]'>
        <h1>Men's 
            {/* {changeNameCategory}  */}
            Shoes 
            {/* ({clickCategory.length}) */}
            </h1>
        <div>
          <span className='inline-block mr-[20px]'>Hide Filters</span>
          <span className='inline-block'>Sort By</span>
          <button className="ml-[20px] p-[2px] border border-amber-900 rounded"
        //    onClick={changeBackgroundColor}
           >Change Color</button>
        </div>
      </div>
    )
}

export default Nav;