function MiniSideBar(){
    return (
        <div className="w-64 h-96 py-4 bg-white rounded shadow border border-gray-200 flex-col justify-start items-start inline-flex">
            <div className="w-64 h-10 pl-6 pr-32 py-2.5 bg-orange-400 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-white text-sm font-semibold font-['Public Sans'] leading-tight">Dashboard</div>
            </div>
            <div className="w-64 h-10 pl-6 pr-28 py-2.5 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Order History</div>
            </div>
            <div className="w-64 h-10 pl-6 pr-32 py-2.5 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Track Order</div>
            </div>
            <div className="w-64 h-10 pl-6 pr-28 py-2.5 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Shopping Cart</div>
            </div>
            <div className="w-64 h-10 pl-6 pr-40 py-2.5 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Wishlist</div>
            </div>
            <div className="w-64 h-10 pl-6 pr-36 py-2.5 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Compare</div>
            </div>
            <div className="w-64 h-10 pl-6 pr-24 py-2.5 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Cards & Address</div>
            </div>
            <div className="w-64 h-10 pl-6 pr-24 py-2.5 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Browsing History</div>
            </div>
            <div className="w-64 h-10 pl-6 pr-40 py-2.5 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Setting</div>
            </div>
            <div className="w-64 h-10 pl-6 pr-40 py-2.5 justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Log-out</div>
            </div>
        </div>
    )
}
export default MiniSideBar