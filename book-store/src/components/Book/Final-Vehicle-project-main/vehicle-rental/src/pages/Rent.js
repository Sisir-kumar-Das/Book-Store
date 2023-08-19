import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../features/vehicles/vehicleActions';

const Rent = () => {
  const { id, type } = useParams();

  const { currentProduct, loading } = useSelector((state) => state.vehicles);

  const dispatch = useDispatch(id);
  console.log(currentProduct);

  useEffect(() => {
    dispatch(getProduct({ id }));
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className='container mx-auto max-w-[1080px] w-[90%] marker:shadow rounded-md p-4 my-8'>
        <div className='animate-pulse flex '>
          <div className='bg-gray-200 min-h-[80vh] basis-2/4 w-full'></div>
          <div className='flex-1 space-y-6 p-8 basis-2/4'>
            <div className='h-2 bg-gray-200 rounded'></div>
            <div className='space-y-3'>
              <div className='grid grid-cols-3 gap-4'>
                <div className='h-2 bg-gray-200 rounded col-span-2'></div>
                <div className='h-2 bg-gray-200 rounded col-span-1'></div>
              </div>
              <div className='h-2 bg-gray-200 rounded'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='container mx-auto max-w-[1080px] w-[90%] marker:shadow rounded-md p-4 my-8'>
        <div className='block md:flex gap-8 '>
          <img
            src={currentProduct?.url}
            alt=''
            className='w-full basis-2/4 aspect-auto max-w-[480px] rounded-lg'
          />

          <div className='grow'>
            <h3 className='text-2xl capitalize my-2 font-bold'>
              {currentProduct?.title}
            </h3>
            <h4>Details:</h4>

            <button type='button' className='btn btn-success'>
              ⭐ {currentProduct?.rating}
            </button>
            <h5>
              <b>Price :</b> {currentProduct?.price}
            </h5>

            <h5>
              <b>Type :</b> {currentProduct?.vehicleType}
            </h5>
            {type === 'car' && (
              <h5>
                <b>Seats :</b> {currentProduct?.seats}
              </h5>
            )}
            <form className='w-full max-w-[360px] block'>
              <select className='w-full my-4 rounded-md'>
                <option defaultValue>SET YOUR LOCATION</option>
                <option value='1'>Delhi</option>
                <option value='2'>Bangalore</option>
                <option value='3'>Kolkata</option>
                <option value='3'>Hyderabad</option>
                <option value='3'>Chennai</option>
              </select>

              <h6 className='mb-2 text-xl font-bold'>Select a time:</h6>

              <div className='flex items-center gap-4'>
                <label htmlFor='from' className='basis-1/3'>
                  FROM
                </label>
                <input
                  type='time'
                  id='from'
                  name='from'
                  className='w-full rounded-md'
                />
              </div>
              <div className='flex mt-4 items-center gap-4'>
                <label htmlFor='To' className='basis-1/3'>
                  TO
                </label>
                <input
                  type='time'
                  id='To'
                  name='To'
                  className='w-full  rounded-md'
                />
              </div>

              <Link
                to='/sucess'
                className='w-full md:w-fit text-center bg-blue-600 p-2 px-4 rounded-md inline-block my-4 text-white'
              >
                RENT THE VEHICLE
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Rent;
