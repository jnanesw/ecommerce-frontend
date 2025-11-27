import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "./ProductViewModal.css";
import ProductButton from "../ProductButton";

function ProductViewModal({ isOpen, setIsOpen, product, isAvail }) {
  if (!product) return null;

  const {
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
  } = product;

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="modal-panel">
                <Dialog.Title as="h3" className="modal-title">
                  {productName}
                </Dialog.Title>

                <img
                  src={image}
                  alt={productName}
                  className="modal-image"
                />

                <p className="modal-description">{description}</p>

                <div className="modal-details">
                  <p>
                    <span className="label">Quantity:</span> {quantity}
                  </p>
                  <p>
                    <span className="label">Price:</span> ${price}
                  </p>
                  <p>
                    <span className="label">Discount:</span> {discount}%
                  </p>
                  <p>
                    <span className="label">Special Price:</span> ${specialPrice}
                  </p>
                </div>

                <div className="modal-actions">
                  <ProductButton
                    isAvailable={isAvail}
                    onClick={closeModal}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ProductViewModal;
