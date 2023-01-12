import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
// import styles from './header.css?inline';

export default component$(() => {
  //useStylesScoped$(styles);

  return (
    <header class="flex bg-black border-b-10px border-b-purple-700">
      {/* <!-- #logo --> */}
      <div class="logo"> 
        <a class="inline-block pt-10px pr-10px pb-7px pl-20px" href="https://qwik.builder.io/" target="_blank" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ul class="m-0 pt-3px pt-10px pl-0 pb-0">
        <li class="inline-block m-0 p-0">
          <a 
            class="inline-block py-15px px-10px no-underline hover:underline" 
            href="https://qwik.builder.io/docs/components/overview/" 
            target="_blank">
            Docs
          </a>
        </li>
        <li class="inline-block m-0 p-0">
          <a 
            class="inline-block py-15px px-10px  no-underline hover:underline text-white"
            href="https://qwik.builder.io/examples/introduction/hello-world/" 
            target="_blank">
            Examples
          </a>
        </li>
        <li class="inline-block m-0 p-0">
          <a 
            class="inline-block py-15px px-10px no-underline hover:underline"
            href="https://qwik.builder.io/tutorial/welcome/overview/" 
            target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
