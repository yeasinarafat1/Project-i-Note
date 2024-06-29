
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const CopyButton = ({ text }) => {

    return (
        <CopyToClipboard text={text}
        onCopy={() => toast.success('Text copied to clipboard📋',{
            theme:"dark"
        })}>
        <button className='btn btn-success'><img src="copy.svg" alt="" /></button>
      </CopyToClipboard>
    );
};

export default CopyButton;
