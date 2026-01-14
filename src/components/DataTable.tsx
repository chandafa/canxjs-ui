import { ActionButton } from "./ActionButton";

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => any);
  align?: 'left' | 'center' | 'right';
  render?: (item: T) => any;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  actions?: (item: T) => any;
  title?: string;
  description?: string;
  primaryAction?: {
    label: string,
    onClick?: () => void,
    href?: string
  }
}

export function DataTable<T>({ data, columns, actions, title, description, primaryAction }: DataTableProps<T>) {
  return (
    <div className="w-full">
      {(title || primaryAction) && (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            {title && <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>}
            {description && <p className="text-slate-400 mt-1">{description}</p>}
          </div>
          {primaryAction && (
             primaryAction.href ? 
             <a href={primaryAction.href} className="btn-premium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                {primaryAction.label}
             </a> 
             :
             <button onClick={primaryAction.onClick} className="btn-premium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                {primaryAction.label}
             </button>
          )}
        </div>
      )}

      <div className="glass rounded-xl overflow-hidden border border-slate-700/50 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/50 border-b border-slate-700/50">
                {columns.map((col, idx) => (
                  <th key={idx} className={`px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-${col.align || 'left'}`}>
                    {col.header}
                  </th>
                ))}
                {actions && <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {data.map((item, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-slate-800/30 transition-colors group">
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} className={`px-6 py-4 whitespace-nowrap text-sm text-slate-300 text-${col.align || 'left'}`}>
                      {col.render ? col.render(item) : (item[col.accessor as keyof T] as any)}
                    </td>
                  ))}
                  {actions && (
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         {actions(item)}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Mockup */}
        <div className="px-6 py-4 border-t border-slate-700/50 flex items-center justify-between bg-slate-800/30">
             <span className="text-sm text-slate-500">Showing 1 to {data.length} of {data.length} entries</span>
             <div className="flex gap-2">
                 <button className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-sm hover:text-white hover:border-slate-600 transition">Previous</button>
                 <button className="px-3 py-1 rounded-lg bg-primary/20 border border-primary/50 text-emerald-400 text-sm">1</button>
                 <button className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-sm hover:text-white hover:border-slate-600 transition">Next</button>
             </div>
        </div>
      </div>
    </div>
  );
}
