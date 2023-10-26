export const dictionary = {
    vn: {
        essentials_1: 'Là 1 thư viện Javascript tạo nên giao diện người dùng, SolidJS trực tiếp cập nhật thay đổi UI trên native DOM (không dùng Virtual DOM như một vài Javascript UI Library/ Framework khác).',
        essentials_2: 'Cung cấp cơ chế Reactive chịu trách nhiệm cho việc theo dõi và tự động cập nhật thay đổi UI khi State hoặc Props thay đổi và Reactivity Primitives gồm 3 thành phần cốt lõi là Signal, Memo và Effect.',
        essentials_3: 'SolidJS sử dụng JSX: JavaScript XML là một cú pháp mở rộng cho phép lập trình viên viết HTML trong SolidJS dễ dàng.',
        essentials_4: 'Áp dụng mô hình Component Based tạo nên các UI có khả năng tái sử dụng.',
        essentials_5: 'Hỗ trợ và cung cấp các Lifecycle Methods. Hỗ trợ Typescript, SSR.',

        reactivity_1: 'Cũng giống như React, Solid sử dụng JSX để render HTML lên trình duyệt web, cập nhật DOM in real-time.<br />Solidjs sử dụng compiled DOM thay vì virtual DOM như React.<br />Solidjs bắt buộc sử dụng <span class="text-focus">single JSX element</span> (Fragment element)',
        reactivity_2: '<span class="text-focus">Components</span> là những funcions được sử dụng để lồng vào các component.<br />Ví dụ &#60;HelloWorldComponent&#62;.',
        reactivity_3: '<span class="text-focus">Signals</span> dùng để ghi danh các simple reactive state.<br />Nếu giá trị signal thay đổi nó sẽ tự động cập nhật lại tất cả các chỗ đang sử dụng chúng.',
        reactivity_4: '<span class="text-focus">Effects</span> để theo dõi mỗi khi Signals thay đổi giá trị.',
        reactivity_5: '<span class="text-focus">Memos</span> là kết hợp của Efect và Signal (getter)<br />Khi xử lý việc lặp lại, sử dụng Memos để lấy ra giá trị mà không cần truy xuất lại chúng khi giá trị phụ thuộc thay đổi.',

        control_flow_1: '<span class="text-focus">&#60;Show&#62</span> sử dụng component này khi muốn set điều kiện để hiển thị.<br />Sử dụng thuộc tính <cite>fallback</cite> để set điều kiện ngược lại.',
        control_flow_2: '<span class="text-focus">&#60;For&#62</span> là component dùng để loop một mảng. <br />Khi mảng thay đổi DOM sẽ tự động được update lại.',
        control_flow_3: '<span class="text-focus">&#60;Switch&#62</span> và <span class="text-focus">&#60;Match&#62</span> khi có nhiều điều kiện để hiển thị.<br />Sử dụng thuộc tính <cite>fallback</cite> để set điều kiện default.',

        life_cycles_1: '<span class="text-focus">onMount</span> trước khi render trang, khi cần thực thi các initial methods.',
        life_cycles_2: '<span class="text-focus">onCleanup</span> Sự kiện này được gọi khi qua trang khác hoặc đóng trang hiện tại.',

        comparison_vue_template: '<span>Viết theo syntax Vue composition API.<br />HTML được dùng bởi tag <span class="text-focus">&#60;template&#62;</span> và Javascript sẽ được dùng bởi tag <span class="text-focus">&#60;script&#62;</span>. <br />và có tag thứ 3 dùng cho CSS được viết trong <span class="text-focus">&#60;style&#62;</span>.</span>',
        comparison_solid_template: '<span>Khác với Vue, Solid chỉ sử dụng 1 function component.<br />Trong 1 page có thể có nhiều component lồng vào nhau nhưng chỉ có duy nhất 1 component top level.</span>',

        comparison_vue_reactivity_1: '<span>Đối với Vue chúng ta có thể dùng <span class="text-focus">ref()</span> and <span class="text-focus">reactive()</span> để xử lý state trong từng component. <br />Trong một số trường hợp dùng <span class="text-focus">reactive()</span> có thể quản lý state đơn giản hơn thay vì dùng tới Vuex.</span>',
        comparison_vue_reactivity_2: '<p>Tạo một trang home và import Component A và Componet B.</p>',
        comparison_vue_reactivity_3: '<p>Tiếp tục tạo mới store bằng <span class="text-focus">reactive()</span> function.</p>',
        comparison_vue_reactivity_4: '<p>Component A đã được import store và thay đổi giá trị bằng function <cite>add</cite>.</p>',
        comparison_vue_reactivity_5: '<p>Component B sẽ phản ứng và hiển thị giá trị <cite>store.count</cite> ngay khi giá trị thay đổi.</p>',

        comparison_solid_reactivity_1: '<span>Trong Solid để xử lý state chúng ta có thể dùng <span class="text-focus">createStore()</span> hoặc <span class="text-focus">createSignal()</span>. <br /><span class="text-focus">createSignal()</span> dùng cho các kiểu booleans, objects, string và numbers. <br /><span class="text-focus">createStore()</span> chỉ dùng duy nhất cho objects. <br /></span>',
        comparison_solid_reactivity_2: '<p>Tạo một trang home và import Component A và Componet B.</p>',
        comparison_solid_reactivity_3: '<p>Tiếp tục tạo mới store bằng <cite>createStore()</cite> function.</p>',
        comparison_solid_reactivity_4: '<p>Component A đã được import store và thay đổi giá trị bằng function <cite>add</cite>.</p>',
        comparison_solid_reactivity_5: '<p>Component B sẽ phản ứng và hiển thị giá trị <cite>store.count</cite> ngay khi giá trị thay đổi.</p>',

        comparison_vue_conditional : '<p>Để hiển thị nội dung với các điều kiện trong Vue, chúng ta sử dụng <span class="text-focus">v-if</span>, <span class="text-focus">v-else-if</span> and <span class="text-focus">v-else.</span></p><p>Vue dùng <span class="text-focus">v-for</span> để render từng item trong 1 mảng.</p>',
        comparison_solid_conditional : '<p>Trong Solid chung ta sử dụng <span class="text-focus">&#60;Show&#62;</span> hoặc <span class="text-focus">&#60;Switch&#62;</span> để render theo điều kiện.</p><p><span class="text-focus">&#60;For&#62;</span> component là cách để thực hiện loop cho 1 mảng.</p>',

        comparison_benmark_1: '<span>Dựa trên bài tham khảo: <a href="https://github.com/krausest/js-framework-benchmark" target="_blank">https://github.com/krausest/js-framework-benchmark</a></span><br /><span>Bài đánh giá được thực hiện trên Macbook Pro 14 (32 GB RAM, 8/14 Cores, OSX 14.0), Chrome 118.0.5993.70</span><br /><br />',
        comparison_benmark_2: '<p>Đơn vị milliseconds (± cho mỗi lần chạy khác nhau)</p>',
        comparison_benmark_3: '<p>Startup metrics</p>',
        comparison_benmark_4: '<p>Sử dụng Memory (MBs)</p>',
    },
    en: {
        essentials_1: 'Solid is a Javascript library that creates the user interface, SolidJS directly updates UI changes on the native DOM (not using Virtual DOM like some other Javascript UI Libraries/Frameworks).',
        essentials_2: 'Provides a Reactive mechanism responsible for tracking and automatically updating UI changes when State or Props change and Reactivity Primitives include 3 core components: Signal, Memo and Effect.',
        essentials_3: 'SolidJS uses JSX: JavaScript XML is an extensible syntax that allows programmers to easily write HTML in SolidJS.',
        essentials_4: 'Applying the Component based on model creates reusable UI.',
        essentials_5: 'Support and provide Lifecycle methods. Support Typescript, SSR.',

        reactivity_1: 'Just like React, Solid uses JSX to render HTML in the browser. It also uses similar syntax for reactivity to update DOM in real-time. <br />However, unlike React, it uses a compiled DOM instead of virtual DOM.Solid components allow only a <span class="text-focus">single JSX element at the top level</span>. <br />To combat this, you can use special JSX elements called fragments.',
        reactivity_2: '<span class="text-focus">Components</span> can be nested inside one another. For instance. <br />Here you have a &#60;HelloWorldComponent&#62;.',
        reactivity_3: "<span class='text-focus'>Signals</span> are the cornerstone of reactivity in Solid. They contain values that change over time. <br />When you change a signal's value, it automatically updates anything that uses it.",
        reactivity_4: '<span class="text-focus">Effects</span> are trackable values, but they are only one half of the equation. To complement those are observers that can be updated by those trackable values. <br />An effect is one such observer; it runs a side effect that depends on signals.',
        reactivity_5: '<span class="text-focus">Memos</span> like an effect and read-only signal <br />Since they are aware of both their dependencies and their observers, they can ensure that they run only once for any change. <br />This makes them preferable to registering effects that write to signals. Generally, what can be derived, should be derived.',

        control_flow_1: "The most basic control flow is the conditional. Solid's compiler is smart enough to optimally handle ternaries (a ? b : c) and boolean expressions (a && b).<br />However, often it is more readable to use Solid's <span class='text-focus'>&#60;Show&#62;</span> component.",
        control_flow_2: "The <span class='text-focus'>&#60;For&#62</span> component is the best way to loop over an array of objects.<br />As the array changes, <span class='text-focus'>&#60;For&#62</span> updates or moves items in the DOM rather than recreating them. Let's look at an example.",
        control_flow_3: "Sometimes you need to deal with conditionals with more than 2 mutual exclusive outcomes. For this case, we have the <span class='text-focus'>&#60;Switch&#62</span> and <span class='text-focus'>&#60;Match&#62</span> components modeled roughly after JavaScript's switch/case.<br />It will try in order to match each condition, stopping to render the first that evaluates to true. Failing all of them, it will render the fallback.",

        life_cycles_1: '<span class="text-focus">onMount</span>: Registers a method that runs after initial render and elements have been mounted.<br />Ideal for using refs and managing other one time side effects.<br />It is equivalent to a createEffect which does not have any dependencies.',
        life_cycles_2: 'we made <span class="text-focus">onCleanup</span> a first-class method. You can call it at any scope and it will run when that scope is triggered to re-evaluate and when it is finally disposed.',

        comparison_vue_template: '<span>The template syntax used with the composition API in Vue.<br />HTML is used in the <span class="text-focus">&#60;template&#62;</span> tag and Javascript or Typescript is used in the <span class="text-focus">&#60;script&#62;</span> tag. <br />There is a third tag used for styling called the <span class="text-focus">&#60;style&#62;</span> tag as well.</span>',
        comparison_solid_template: "<span>Solid on the other hand makes use of only one kind of component, the function component. <br />Unlike Vue, Solid doesn't have different syntaxes, it only has one. <br />All components and pages in Solid are represented by function components.</span>",

        comparison_vue_reactivity_1: '<span>In Vue you can make use of the <span class="text-focus">ref()</span> and <span class="text-focus">reactive()</span> functions to handle state in a Vue component. <br />In some cases <span class="text-focus">reactive()</span> can serve as a simple state management alternative instead of having to make use of VueX.</span>',
        comparison_vue_reactivity_2: '<p>We created out home page imported ComponentA & ComponentB</p>',
        comparison_vue_reactivity_3: '<p>Above we created our store using the <span class="text-focus">reactive()</span> function.</p>',
        comparison_vue_reactivity_4: '<p>Above is a component which has the store imported in order to change one of the values within the store.</p>',
        comparison_vue_reactivity_5: '<p>This is a seperate component which will display the value of the count even as it is changing.</p>',

        comparison_solid_reactivity_1: '<span>In Solid we can do something similar by making use of the <span class="text-focus">createStore()</span> and the <span class="text-focus">createSignal()</span> primitives. <br />Remember that <span class="text-focus">createStore()</span> only takes in objects as values. <br />While <span class="text-focus">createSignal()</span> can take in booleans, objects, strings and numbers.</span>',
        comparison_solid_reactivity_2: '<p>We created out home page imported ComponentA & ComponentB</p>',
        comparison_solid_reactivity_3: '<p>Above we created a store using <cite>createStore()<cite> in Solid.',
        comparison_solid_reactivity_4: '<p>Above is a component which has the store imported in order to change one of the values within the store.</p>',
        comparison_solid_reactivity_5: '<p>This is a seperate component which will display the value of the count even as it is changing.</p>',

        comparison_vue_conditional: "<p>If you have experience with Vue I'm sure you should be familiar with the <span class='text-focus'>v-if</span>, <span class='text-focus'>v-else</span> and <span class='text-focus'>v-else-if</span> directives. <br />This is used to conditionally render itself and anything that it is wrapping.</p><p>In Vue you make use of the <span class='text-focus'>v-for</span> directive to render a list or array of items.</p>",
        comparison_solid_conditional: '<p>Solid has components similar to these that make conditional rendering very easy and look much cleaner.</br>These components are namely <span class="text-focus">Show</span> and <span class="text-focus">Switch</span></p><p>In Solid the <span class="text-focus">&#60;For&#62;</span> component is the best way to loop over an array of objects</p>',

        comparison_benmark_1: '<span>Based on post: <a href="https://github.com/krausest/js-framework-benchmark" target="_blank">https://github.com/krausest/js-framework-benchmark</a></span><br /><span>The benchmark was run on a MacBook Pro 14 (32 GB RAM, 8/14 Cores, OSX 14.0), Chrome 118.0.5993.70 (arm64) using the puppeteer benchmark driver with reduced tracing.</span><br /><br />',
        comparison_benmark_2: '<span>Duration in milliseconds ± 95% confidence interval (Slowdown = Duration / Fastest)</span>',
        comparison_benmark_3: '<span>Startup metrics (lighthouse with mobile simulation)</span>',
        comparison_benmark_4: '<span>Memory allocation in MBs ± 95% confidence interval</span>',
    },
}