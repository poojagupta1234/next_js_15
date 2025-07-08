import React, { useId } from 'react';
export default function List( props: Readonly<{ linksData: Array<{ name: string; href: string }> }>) {
const   { linksData } = props;
 const id = useId();
return (
    <ul>
        {linksData.map((link: { name: string; href: string }) => (
        <li key={`${id}-${link.name}`} title={link.name}>  
            <a href={link.href}>{link.name}</a>
        </li>
        ))}  
        </ul>
 );
}