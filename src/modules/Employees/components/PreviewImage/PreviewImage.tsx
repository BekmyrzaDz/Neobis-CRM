import React, { useState } from 'react';

interface Props {
  file: File;
}

const PreviewImage: React.FC<Props> = ({ file }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result as string);
  };

  return (
    <div>
      {preview ? (
        <img src={preview} alt='preview' width='200px' height='200px' />
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default PreviewImage;
