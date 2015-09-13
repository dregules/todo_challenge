describe('To Do App in Angular', function() {
  var addBox = element(by.model('taskName'));
  var addButton = element(by.className('btn'));
  var task = element(by.binding('task.description'));

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do App in Angular');
  });

  it('clicking on Add button will showcase task', function(){
    addBox.sendKeys('Go Shopping');
    addButton.click();
    // console.log(taskList);
    expect(task).getText().toEqual('Go Shopping');
  });
});