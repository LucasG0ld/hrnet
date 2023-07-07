import React from 'react';
import Link from '../../atoms/link/link';

function CustomModalContent({ handleCreateEmployee }) {

  return (
    <div>
        <div className="hnt-modal-title-container">
            <h2 className="hnt-modal-title">New Employee</h2>
        </div>
        <p>Congratulations, new employee created!</p>
        <div className='hnt-modal-btn-container'>
            <div className='hnt-modal-btn hnt-modal-btn-left'>
                <Link onClick={handleCreateEmployee} className="hnt-home-link hnt-link-create">Create New Employee</Link>
            </div>
            <div className='hnt-modal-btn hnt-modal-btn-right'>
                <Link link="/view-employee" className="hnt-home-link hnt-link-view">View Current Employee</Link>
            </div>
            <div className='hnt-modal-btn hnt-modal-btn-right'>
                <Link link="/test" className="hnt-home-link hnt-link-view">Test</Link>
            </div>
      </div>
    </div>
  );
}

export default CustomModalContent;