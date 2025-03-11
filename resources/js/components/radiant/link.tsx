import * as Headless from '@headlessui/react';
import { Link as InertiaLink, InertiaLinkProps } from '@inertiajs/react';
import { forwardRef } from 'react';

export const Link = forwardRef(function Link(
    props: InertiaLinkProps & React.ComponentPropsWithoutRef<'a'>,
    ref: React.ForwardedRef<HTMLAnchorElement>,
) {
    return (
        <Headless.DataInteractive>
            <InertiaLink ref={ref} {...props} />
        </Headless.DataInteractive>
    );
});
