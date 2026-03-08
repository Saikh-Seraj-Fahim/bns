export default function AccountManagement() {
    return (
        <div className="px-12 py-6 m-6 border rounded-lg">
            <h1 className="font-bold font-nunito text-black text-2xl">Profile Setting</h1>
            <div className="flex items-center gap-6 mt-6">
                <button className="px-4 py-2 rounded-full bg-[#094AAA1F] cursor-pointer">
                    Profile
                </button>
                <button className="px-4 py-2 rounded-full bg-[#6E76001F] cursor-pointer">
                    Edit Profile
                </button>
                <button className="px-4 py-2 rounded-full bg-[#FFEBEB] cursor-pointer">
                    Change Password
                </button>
            </div>

            <div className="flex gap-12 mt-6">
                <div className="flex flex-col">
                    <p>Name</p>
                    <h1>Henry</h1>
                </div>
                <div className="flex flex-col">
                    <p>Phone Number</p>
                    <h1>01768048385</h1>
                </div>
                <div className="flex flex-col">
                    <p>Emaill</p>
                    <h1>taylor@gmail.com</h1>
                </div>
                <div className="flex flex-col">
                    <p>Address</p>
                    <h1>New York, USA</h1>
                </div>
            </div>
        </div>
    );
}