
function SubMenu({submenu}) {

    return (
        <ul className="absolute border p-[15px] rounded-[15%] hover:border-stone-700 hover:bg-slate-200 hover:text-neutral-600">
            {[...new Set(submenu.flatMap(item => item.category))].map((element, idx) => {
                return <li key={idx} className="hover:text-white"><a href="#">{element}</a></li>
            })}
        </ul>
    )
}

export default SubMenu;