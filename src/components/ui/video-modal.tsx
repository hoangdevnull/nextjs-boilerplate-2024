'use client';

import React, { useRef, useState, type ElementRef, type ReactElement, type ReactNode } from 'react';
import { Modal, ModalContent } from '@nextui-org/modal';
import ReactPlayer from 'react-player';

import { cn } from '@/lib/utils';

interface Props {
  url?: string;
  children: ReactNode;
}

const VideoModal = ({ url, children }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<ElementRef<typeof ReactPlayer>>(null);
  return (
    <>
      {React.cloneElement(children as ReactElement, {
        onClick: () => {
          setOpen(true);
        },
      })}
      <Modal backdrop="blur" classNames={{ closeButton: 'hidden' }} size="3xl" isOpen={isOpen} onOpenChange={setOpen}>
        <ModalContent>
          <div className={cn('relative h-full min-h-[500px] w-full overflow-hidden p-4')}>
            <ReactPlayer
              style={{ position: 'absolute', inset: 0 }}
              ref={ref}
              width="100%"
              controls
              height="100%"
              url={url}
            />
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoModal;
