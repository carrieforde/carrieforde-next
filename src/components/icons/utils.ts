import s from '@/components/icons/icon.module.css';
import clsx from 'clsx';

export function iconClasses(className?: string) {
  return clsx(s.icon, 'icon', className);
}
