
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerData = [
        {
            title: "Solutions",
            item: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"]
        },
        {
            title: "Support",
            item: ["Submit ticket", "Documentation", "Guides"]
        },
        {
            title: "Company",
            item: ["About", "Blog", "Jobs", "Press"]
        },
        {
            title: "Legal",
            item: ["Terms of service", "Privacy policy", "License", ]
        },
        {
            title: "Social",
            item: ["FaceBook", "YouTube", "Instagram", "Linkdin", "Tewtter"]
        }
    ]
    return (
        <div className='w-full h-auto flex flex-col sm:flex-row text-white p-2 bg-zinc-800'>
            {footerData.map((data, index) => (
                <div className='w-full p-2' key={index}>
                    <div className='text-lg font-bold my-2 text-center sm:text-left'>{data.title}</div>
                    <div className='text-center sm:text-left'>{data.item.map((item, index) => (
                        <Link className='block italic hover:text-indigo-500 ' key={index} to={"/#"}>{item}</Link>
                    ))}</div>
                </div>
            ))}
        </div>
    )
}

export default Footer