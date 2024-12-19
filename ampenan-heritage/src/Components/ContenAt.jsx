import PropTypes from 'prop-types';

const ContentA = ({ title, description }) => {
  return (
    <>
      <section className="flex flex-col sm:flex-row justify-between items-center">
        <div className="p-4 sm:p-6">
          <h1 className="text-h4 text-y900 font-bold mb-2">
            {title}
          </h1>
          <p className="text-p text-y950">
            {description}
          </p>
        </div>
      </section>
    </>
  );
};

ContentA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ContentA;
