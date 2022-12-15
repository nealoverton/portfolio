
import handleViewport from 'react-in-viewport';

const Block = ({ inViewport, forwardedRef }) => {
    return (
      <div className="viewport-block" ref={forwardedRef}>
      </div>
    );
  };
  
  const ViewportBlock = handleViewport(Block);

  export default ViewportBlock;