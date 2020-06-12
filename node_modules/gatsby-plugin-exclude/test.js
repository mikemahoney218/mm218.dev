const { onCreatePage } = require('./gatsby-node');

const mockObj = {
  page: {
    path: ''
  },
  actions: {
    deletePage: jest.fn()
  },
  reporter: {
    panic: jest.fn().mockImplementation(() => {
      throw new Error();
    })
  }
};

const exclusionCases = [
  ['/abcd', ['/abcd']],
  ['/abcde/asdf', ['/abcde/*']],
  ['/abcd/asd/asd', ['/abcd/**', '!/abcd/asd']],
  ['/abcd/asd/asd', ['/abcd/*', '!/abcd/asd', '/abcd/asd/asd']]
];
const notExclusionCases = [
  ['/abc/abc', ['/abc/*', '!/abc/abc']],
  ['/abc/abc/', ['/abc/*', '!/abc/abc']],
  ['/abcd/asd/asd', ['/abcd/*', '!/abcd/asd']],
  ['/abc/abc/asd', ['/abc/*', '!/abc/abc/*']]
];

afterEach(() => {
  mockObj.actions.deletePage.mockClear();
  mockObj.reporter.panic.mockClear();
});

describe('onCreatePage', () => {
  it.each([{}, 0, null, /$/, '', undefined])(
    "should call reporter.panic if options.paths is '%p'",
    value => {
      expect(() => onCreatePage(mockObj, { paths: value })).toThrow();
      expect(mockObj.reporter.panic).toHaveBeenCalledTimes(1);
    }
  );

  it('should not call reporter.panic if options.paths is an array', () => {
    onCreatePage(mockObj, { paths: [] });
    expect(mockObj.reporter.panic).not.toHaveBeenCalled();
  });

  it.each([{}, 0, null, /$/, [], undefined])(
    "should call reporter.panic if options.paths is an array with '%p'",
    value => {
      expect(() => onCreatePage(mockObj, { paths: [value] })).toThrow();
      expect(mockObj.reporter.panic).toHaveBeenCalledTimes(1);
    }
  );

  it('should not call reporter.panic if options.paths is an array of strings', () => {
    onCreatePage(mockObj, { paths: [''] });
    expect(mockObj.reporter.panic).not.toHaveBeenCalled();
  });

  it.each(exclusionCases)(
    "should call deletePage(page) for '%s' => %p",
    (path, patterns) => {
      const page = {
        path
      };

      onCreatePage({ ...mockObj, page }, { paths: patterns });

      expect(mockObj.actions.deletePage).toHaveBeenCalledTimes(1);
      expect(mockObj.actions.deletePage).toHaveBeenCalledWith(page);
    }
  );

  it.each(notExclusionCases)(
    "should not call deletePage(page) for '%s' => %p",
    (path, patterns) => {
      const page = {
        path
      };

      onCreatePage({ ...mockObj, page }, { paths: patterns });

      expect(mockObj.actions.deletePage).not.toHaveBeenCalled();
    }
  );
});
