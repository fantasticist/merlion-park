import type { FC } from 'react'
import { XIcon } from '@heroicons/react/solid'
import toast, { Toaster, resolveValue } from 'react-hot-toast'

export const CustomToaster: FC = () => {
  return (
    <Toaster position="bottom-right" toastOptions={{ duration: 120000 }}>
      {(t) => (
        <div
          className="flex w-full max-w-xs items-start rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-neutral-800 dark:text-gray-400"
          role="alert"
        >
          {t.type === 'success' && (
            <div className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          )}
          {t.type === 'error' && (
            <div className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          )}
          <div className="ml-3 text-sm font-normal">
            {resolveValue(t.message, t)}
          </div>
          <button
            type="button"
            className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-neutral-800 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => toast.remove(t.id)}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <XIcon />
          </button>
        </div>
      )}
    </Toaster>
  )
}
