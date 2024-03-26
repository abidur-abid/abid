import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div>
            <h1 className='sectionTitle'><span className='text-secondaryColor'>---</span>{heading}<span className='text-secondaryColor'>---</span></h1>
        </div>
    );
};

export default SectionTitle;