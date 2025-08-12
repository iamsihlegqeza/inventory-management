const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-lamaSkyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Parents Day</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-08-11</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga, vero nisi dolores voluptatum consequatur harum corrupti est voluptate delectus tempore consectetur ea possimus tenetur, culpa, ut rerum iusto omnis.
                    </p>
                </div>
                <div className="bg-lamaPurpleLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Sports Day</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-08-12</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga, vero nisi dolores voluptatum consequatur harum corrupti est voluptate delectus tempore consectetur ea possimus tenetur, culpa, ut rerum iusto omnis.
                    </p>
                </div>
                <div className="bg-lamaYellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Awards Day</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-10-13</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga, vero nisi dolores voluptatum consequatur harum corrupti est voluptate delectus tempore consectetur ea possimus tenetur, culpa, ut rerum iusto omnis.
                    </p>
                </div>
                <div className="bg-lamaSkyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Valentines Day</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-09-14</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga, vero nisi dolores voluptatum consequatur harum corrupti est voluptate delectus tempore consectetur ea possimus tenetur, culpa, ut rerum iusto omnis.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Announcements;