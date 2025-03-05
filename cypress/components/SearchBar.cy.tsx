// cypress/component/SearchBar.cy.tsx
import SearchBar from '../../src/components/SearchBar'; // 引入你要测试的 SearchBar 组件

// describe('SearchBar Component Tests', () => {
  
//   // 初始化 spy 函数来跟踪 setSearchValue 的调用
//   let setSearchValueSpy: Cypress.Agent<sinon.SinonSpy>;

//   // 每个测试之前挂载组件并创建 spy
//   beforeEach(() => {
//     setSearchValueSpy = cy.spy().as('setSearchValueSpy');
//     cy.mount(<SearchBar setSearchValue={setSearchValueSpy} />);
//   });

//   it('should render the input and search button', () => {
//     // 验证输入框存在并且可见
//     cy.get('input[placeholder="Search for a city"]').should('exist').and('be.visible');

//     // 验证搜索按钮存在并且可见
//     cy.contains('Search').should('exist').and('be.visible');
//   });

//   it('should allow user to type in the input field', () => {
//     // 模拟用户在输入框中输入 "New York"
//     cy.get('input[placeholder="Search for a city"]').type('New York');

//     // 验证输入框中的值是否为 "New York"
//     cy.get('input[placeholder="Search for a city"]').should('have.value', 'New York');
//   });

//   it('should call setSearchValue with correct input when Search button is clicked', () => {
//     // 在输入框中输入 "Los Angeles"
//     cy.get('input[placeholder="Search for a city"]').type('Los Angeles');

//     // 点击 "Search" 按钮
//     cy.contains('Search').click();

//     // 验证 setSearchValue 被调用，传递的值是 "Los Angeles"
//     cy.get('@setSearchValueSpy').should('have.been.calledWith', 'Los Angeles');
//   });

//   it('should not call setSearchValue if the input is empty when Search button is clicked', () => {
//     // 验证输入框为空
//     cy.get('input[placeholder="Search for a city"]').should('have.value', '');

//     // 点击 "Search" 按钮
//     cy.contains('Search').click();

//     // 验证 setSearchValue 没有被调用
//     cy.get('@setSearchValueSpy').should('not.have.been.called');
//   });
// });

// describe('SearchBar Component', () => {
//   it('allows input and triggers search action', () => {
//     // 创建一个模拟的 setSearchValue 函数
//     const setSearchValueSpy = cy.spy().as('setSearchValue');

//     // 使用 Cypress 的 mount 功能来渲染组件
//     cy.mount(<SearchBar setSearchValue={setSearchValueSpy} />);

//     // 测试输入框是否可以输入文字
//     cy.get('input').type('Melbourne');
//     cy.get('input').should('have.value', 'Melbourne');

//     // 点击搜索按钮
//     cy.contains('Search').click();

//     // 验证 setSearchValue 函数被调用，并且传递了正确的值
//     cy.get('@setSearchValue').should('have.been.calledWith', 'Melbourne');
//   });
// });

describe('SearchBar Component', () => {
  it('allows input and triggers search action', () => {
    // 创建一个模拟的 setSearchValue 函数
    const setSearchValueSpy = cy.spy().as('setSearchValue');

    // 渲染 SearchBar 组件
    cy.mount(<SearchBar setSearchValue={setSearchValueSpy} />);

    // 使用 data-testid 来选择 input 和 button
    cy.get('[data-testid="search-input"]').type('Melbourne');
    cy.get('[data-testid="search-input"]').should('have.value', 'Melbourne');

    // 点击带有 data-testid 的搜索按钮
    cy.get('[data-testid="search-button"]').click();

    // 验证 setSearchValue 函数被正确调用
    cy.get('@setSearchValue').should('have.been.calledWith', 'Melbourne');
  });
});
