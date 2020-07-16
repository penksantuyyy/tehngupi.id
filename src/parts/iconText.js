import React from 'react';

import Button from 'elements/Button';
import { ReactComponent as Logo } from 'assets/images/logo-medium.svg';

export default function IconText() {
  return (
    <Button className="brand" href="" type="link">
      <div className="brand-logo-icon">
        <Logo/>
      </div>
      <div className="brand-text-icon">
        Teh<span className="text-gray-900">Ngupi</span>
      </div>
    </Button>
  );
}
